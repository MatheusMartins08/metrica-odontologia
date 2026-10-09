import Image from "next/image";
import { space } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealLines } from "@/components/ui/RevealLines";

/** Asymmetric gallery: each frame keeps its own proportion and offset. */
const layout = [
  { cell: "col-span-2 md:col-span-7", frame: "aspect-7/5", sizes: "(min-width: 768px) 56vw, 100vw" },
  { cell: "col-span-1 md:col-span-4 md:col-start-9 md:mt-32", frame: "aspect-4/5", sizes: "(min-width: 768px) 32vw, 50vw" },
  { cell: "col-span-1 md:col-span-6 md:col-start-2 md:-mt-6", frame: "aspect-4/5 md:aspect-3/2", sizes: "(min-width: 768px) 48vw, 50vw" },
  { cell: "col-span-2 md:col-span-3 md:col-start-9 md:mt-20", frame: "aspect-3/2 md:aspect-4/5", sizes: "(min-width: 768px) 24vw, 100vw" },
];

export function Space() {
  const gallery = space.gallery.slice(0, layout.length);

  return (
    <section aria-labelledby="espaco-title" className="section-y">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="08" label="O espaço" />
            <RevealLines
              id="espaco-title"
              className="display-2 mt-8"
              lines={["Um lugar pensado", <>para a <em className="italic">calma.</em></>]}
            />
          </div>
          <p className="max-w-md text-tinta lg:col-span-4 lg:col-start-9 lg:pb-2" data-reveal="up">
            {space.intro}
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-12 md:gap-x-6 lg:mt-24">
          {gallery.map((img, i) => (
            <li key={img.caption} className={layout[i].cell}>
              <figure>
                <div
                  className={`relative overflow-hidden bg-creme ${layout[i].frame}`}
                  data-reveal="image"
                >
                  <div className="absolute inset-x-0 top-[-6%] h-[112%]" data-parallax="0.08">
                    <Image src={img.src} alt={img.alt} fill placeholder="blur" sizes={layout[i].sizes} className="object-cover" />
                  </div>
                </div>
                <figcaption className="eyebrow mt-3 flex flex-wrap gap-x-3 gap-y-1 text-tinta">
                  <span aria-hidden="true">Fig. {String(i + 2).padStart(2, "0")}</span>
                  <span>{img.caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
