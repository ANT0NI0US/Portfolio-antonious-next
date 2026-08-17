import { ReactNode } from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import { VARIATION_STYLES } from "./variationStyles";

interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  placeholder: string;
  error?: string;
  disabled?: boolean;
  Icon?: ReactNode;
  field: ControllerRenderProps<TFieldValues, TName>;
}

export default function Input<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  placeholder,
  error,
  disabled,
  Icon,
  field,
}: InputProps<TFieldValues, TName>) {
  const errorStyles = error ? VARIATION_STYLES.error : VARIATION_STYLES.default;
  return (
    <div className="w-full">
      <div
        className={`bg-main relative z-10 flex items-center rounded-md transition-all duration-300 ${errorStyles}`}
      >
        <input
          id={placeholder}
          type="text"
          placeholder=" "
          className={`input ${disabled ? "placeholder:text-light border-none" : ""} ${
            VARIATION_STYLES.input
          }`}
          disabled={disabled}
          {...field}
        />

        {Icon && (
          <div
            className={`flexCenter text-primary h-11 w-10 rounded-tr-sm rounded-br-sm ${
              disabled ? "cursor-not-allowed" : ""
            }`}
          >
            {Icon}
          </div>
        )}

        <label
          htmlFor={placeholder}
          className={`${
            disabled
              ? "peer-placeholder-shown:text-light/70 cursor-not-allowed"
              : "peer-placeholder-shown:text-light"
          } ${VARIATION_STYLES.label}`}
        >
          {placeholder} {error && <span className="text-error"> *</span>}
        </label>
      </div>

      {error && (
        <div className="text-error mt-0.75 pl-1.25 text-sm">{error}</div>
      )}
    </div>
  );
}
