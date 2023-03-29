import { Category, CategoryKey } from "@/hooks";
import { useState } from "react";
import { Button } from "../layout/Button";
import { ToggleContainer, ToggleItem, ToggleItemContainer } from "./styled";

interface IToggleProps {
  items: CategoryKey[];
  onDelete: (key: CategoryKey) => void;
}

export const Toggle: React.FC<IToggleProps> = ({ items, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ToggleContainer>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        Delete category
      </Button>
      {isOpen && (
        <ToggleItemContainer>
          {items.map((i) => (
            <ToggleItem key={i}>
              {Category[i]} <Button onClick={() => onDelete(i)}>Delete</Button>
            </ToggleItem>
          ))}
        </ToggleItemContainer>
      )}
    </ToggleContainer>
  );
};
