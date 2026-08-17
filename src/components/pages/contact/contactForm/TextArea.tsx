import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import { VARIATION_STYLES } from "./variationStyles";

interface TextAreaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  placeholder: string;
  error?: string;
  disabled?: boolean;
  field: ControllerRenderProps<TFieldValues, TName>;
}

export default function TextArea<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ placeholder, error, disabled, field }: TextAreaProps<TFieldValues, TName>) {
  const errorStyles = error ? VARIATION_STYLES.error : VARIATION_STYLES.default;
  return (
    <div className="relative w-full">
      <textarea
        id={placeholder}
        placeholder=" "
        rows={6}
        className={`input bg-main resize-none rounded-md ${disabled ? "placeholder:text-light/70" : ""} ${
          VARIATION_STYLES.input
        } ${errorStyles}`}
        disabled={disabled}
        {...field}
      />

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

      {error && <div className="text-error pl-1.25 text-sm">{error}</div>}
    </div>
  );
}
