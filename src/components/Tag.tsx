
export default function Tag({ label }: { label: string }) {
return (
<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-200">
{label}
</span>
)
}