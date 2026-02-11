export default function Spinner() {
    return (
        <div className="text-center">
        <div
            className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-800 mx-auto"
        ></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
            Just wait a little longer
        </p>
        </div>
    )
}
