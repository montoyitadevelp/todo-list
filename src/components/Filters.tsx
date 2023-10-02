import { FOOTER_FILTERED_BUTTONS } from "../consts";
import { filterValue } from "../types";

interface Props {
  filteredSelected: filterValue;
  filteredChange: (filter: filterValue) => void;
}

export const Filters: React.FC<Props> = ({
  filteredSelected,
  filteredChange,
}) => {
  return (
    <>
      <ul className="filters">
        {Object.entries(FOOTER_FILTERED_BUTTONS).map(
          ([key, { href, literal }]) => {
            const isSelected = key === filteredSelected;
            const className = isSelected ? "Selected" : "";
            return (
              <li key={key}>
                <a
                  href={href}
                  className={className}
                  onClick={(event) => {
                    event.preventDefault();
                    filteredChange(key as filterValue);
                  }}
                >
                  {literal}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};
