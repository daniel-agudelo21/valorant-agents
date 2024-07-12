import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="text-center p-6 ">
                <h2 className="text-4xl font-bold text-red-600 mb-4">Te has perdido</h2>
                <p className="text-lg mb-6">Esta pagina no existe</p>
                <Link href="/" className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    Regresar al inicio
                </Link>
            </div>
        </div>
    )
}
