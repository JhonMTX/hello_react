import { differenceInDays } from "date-fns";
import { DefaultValues } from "react-hook-form";
import { z } from "zod";
import { VacationFormValues } from "../vacation.type";

export const subscribeToPopup = {
  title: "PRIVACY STATEMENT",
  content: [
    {
      title: "Information Collection",
      description:
        "Unique Vacations, Inc. is the sole owner of the information collected on this website. Unique Vacations, Inc., as the worldwide representative for Sandals, and Beaches Resorts, collects information from our users at several different points on our Website.",
    },
    {
      title: "Brochure Request and Booking Engine",
      description:
        "We request information from the user on our brochure request forms and in our booking engines. A user must provide contact information (such as name, email, and mailing address) and financial information (such as credit card number, expiration date). This information is used for billing purposes. If we have trouble processing an order, the information is used to contact the user.",
    },
    {
      title: "Profile",
      description:
        "We store information that we collect through cookies and log files to create a profile of our users. A profile is stored information that we keep on individual users that detail their viewing preferences. Consequently, collected information is tied to the users' personally identifiable information to provide offers and improve the content of the site for the user. This profile is used to tailor a user's visit to our Web site and to direct pertinent marketing promotions to them. We do not share, under any circumstances, your profile with other third parties",
    },
    {
      title: "Cookies",
      description:
        "A cookie is a piece of data stored on the user's computer tied to information about the user. Usage of a cookie is in no way linked to any personally identifiable information while on our site. We use both session ID cookies and persistent cookies. For the session ID cookie, once users close the browser, the cookie simply terminates. A persistent cookie is a small text file stored on the user's hard drive for an extended period of time. Persistent cookies can be removed by following Internet browser help file directions.",
    },
    {
      title: "Customer Service",
      description:
        "We communicate with users on a regular basis to provide requested services and in regards to issues relating to their account we reply via email or phone, in accordance with the user's wishes.",
    },
  ],
};

export const vacationFormSchema = z
  .object({
    resort: z.string().nonempty({ message: "This field is required" }).max(3),
    selectedDays: z
      .object({
        from: z.string().nonempty({ message: "This field is required" }),
        to: z.string().nonempty({ message: "This field is required" }),
      })
      .required({ from: true, to: true })
      .refine(({ from, to }) => {
        if (!from || !to) return true;
        const getDiffDays = differenceInDays(to, from);
        // TODO: Will be reading from Strapi CMS (minNights, maxNights)
        return getDiffDays >= 3 && getDiffDays <= 21;
      }),
    includeFlights: z.literal("yes").or(z.literal("no")),
    departureGateway: z.string().optional(),
    arrivalGateway: z.string().optional(),
    flightType: z.literal("economy").or(z.literal("business")).optional(),
    login: z
      .object({
        isChecked: z.boolean().optional(),
        username: z.string().optional(),
        password: z.string().optional(),
        isLogged: z.boolean().optional(),
      })
      .superRefine(({ isChecked, username, password, isLogged }, ctx) => {
        if (!isChecked || isLogged) return;
        if (!username) {
          ctx.addIssue({
            message: "Invalid value or required field.",
            code: z.ZodIssueCode.custom,
            path: ["username"],
          });
        }

        if (!password) {
          ctx.addIssue({
            message: "Invalid value or required field.",
            code: z.ZodIssueCode.custom,
            path: ["password"],
          });
        }
      }),
    subscribeTo: z
      .object({
        isChecked: z.boolean().optional(),
        firstName: z.string().optional(),
        email: z.union([z.literal(""), z.string().email()]),
        country: z.string().optional(),
      })
      .superRefine(({ isChecked, country, email, firstName }, ctx) => {
        if (isChecked && !firstName) {
          ctx.addIssue({
            message: "Invalid value or required field.",
            code: z.ZodIssueCode.custom,
            path: ["firstName"],
          });
        }

        if (isChecked && !email) {
          ctx.addIssue({
            message: "Invalid value or required field.",
            code: z.ZodIssueCode.custom,
            path: ["email"],
          });
        }

        if (isChecked && !country) {
          ctx.addIssue({
            message: "Invalid value or required field.",
            code: z.ZodIssueCode.custom,
            path: ["country"],
          });
        }
      }),
  })
  .superRefine((values, ctx) => {
    if (values.includeFlights === "yes" && !values.departureGateway) {
      ctx.addIssue({
        message: "Invalid value or required field.",
        code: z.ZodIssueCode.custom,
        path: ["departureGateway"],
      });
    }
  });

export const vacationFormInitialValues: DefaultValues<VacationFormValues> = {
  includeFlights: "yes",
  departureGateway: "",
  flightType: "economy",
  resort: "",
  selectedDays: {
    from: "",
    to: "",
  },
  arrivalGateway: "",

  subscribeTo: {
    isChecked: false,
    firstName: "",
    email: "",
    country: "",
  },

  login: {
    isChecked: false,
    username: "",
    password: "",
    isLogged: false,
  },
};
