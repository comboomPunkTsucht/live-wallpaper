import {
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import  {z} from 'zod';
import { zodValidator } from "@tanstack/zod-adapter";
import Particles from "@/components/Particles.tsx";
import cbps_logo from "@/cbps_logo.png";
import  logo from "@/logo.png";

const RootSeachParameter = z.object({
  h1: z.string().optional(),
  h2: z.string().optional(),
})

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: Layout,
  validateSearch: zodValidator(RootSeachParameter),

})

export function Layout () {
  const search = Route.useSearch();
  const h1 = search.h1 ?? 'Fabian Aps';
  const h2 = search.h2 ?? 'ITler/DJ/Producer aus Leidenschaft';
  return <div className="bg-background text-foreground">
      < Particles quantity={400} refresh={true} />
      <div className="z-1">
        <div className="fixed inset-0 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-screen-xl px-4">
            <div className="hidden h-px w-full animate-fade-left animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
            <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline text-center text-foreground duration-3000 sm:text-6xl md:text-9xl">
              {h1}
            </h1>
            <div className="hidden h-px w-full animate-fade-right animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
            <div className="my-16 animate-fade-in text-center">
              <h2 className="text-center text-foreground text-xl">
                {h2 === "comboom.sucht" ? (
                  <img src={cbps_logo} alt="comboom.Sucht Logo" className="sm:h-12 md:h-24 lg:h-48 xl: h-96 mx-auto mb-4" />
                ) : (
                  h2
                )}
              </h2>
            </div>
            {h1 === "mcpeaps_HD" && (
                <div className="right-4 bottom-4 fixed">
                  <img src={logo} alt="mcpeaps_HD Logo" className="sm:h-6 md:h-12 lg:h-24 xl: h-48 mx-auto mb-4" />
                </div>
              )}
          </div>
        </div>
        <Scripts />
      </div>
    </div>

}
