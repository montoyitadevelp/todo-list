export const ALL_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const; //Solo de lectura

export const FOOTER_FILTERED_BUTTONS = {
  [ALL_FILTERS.ALL]: {
    literal: "Alls",
    href: `/?filter=${ALL_FILTERS.ALL}`,
  },
  [ALL_FILTERS.ACTIVE]: {
    literal: "Active",
    href: `/?filter=${ALL_FILTERS.ACTIVE}`,
  },
  [ALL_FILTERS.COMPLETED]: {
    literal: "Completed",
    href: `/?filter=${ALL_FILTERS.COMPLETED}`,
  },
} as const;
