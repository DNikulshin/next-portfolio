import type { Metadata } from "next";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Nikulshin.D - Potrfolio | MyWorks",
  description: "Web Developer Portfolio <Nikulshin Dmitriy>",
  keywords:
    "Web Developer Portfolio, Портфолио Web разработчика, Портфолио Web разработчика Nikulshin Dmitriy, Портфолио Web разработчика Никульшин Дмитрий",
};

export default function MyWorks() {
  return (
    <main className="flex flex-col items-center justify-between pt-32">
      <section>
        <h1 className="text-white text-center mb-2 font-bold text-2xl">MyWorks</h1>
        <Carousel className="md:max-w-3xl mx-2 px-2">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
