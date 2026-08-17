import { EmailIcon, KeyIcon } from "@/icons";
import { ProjectAccount } from "@/data/projects";

interface DemoAccountsProps {
  accounts?: ProjectAccount[];
}

export default function DemoAccounts({ accounts }: DemoAccountsProps) {
  if (!accounts?.length) return null;

  return (
    <div className="bg-secondary/40 border-light/10 rounded-xl border p-5">
      <p className="text-primary mb-4 text-xs tracking-widest uppercase">
        Demo Accounts
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="border-light/10 rounded-lg border border-dashed p-3.5"
          >
            <p className="text-light mb-2 text-sm font-semibold capitalize">
              {account.title}
            </p>
            <p className="text-light/60 flex items-center gap-1.5 text-xs">
              <EmailIcon className="size-3.5 shrink-0" />
              <span className="truncate">{account.email}</span>
            </p>
            <p className="text-light/60 mt-1.5 flex items-center gap-1.5 text-xs">
              <KeyIcon className="size-3.5 shrink-0" />
              <span className="truncate">{account.password}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
