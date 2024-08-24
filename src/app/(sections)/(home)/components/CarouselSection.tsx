import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { testimonials } from '@/utils/Testimonials'
import { QuoteIcon } from 'lucide-react'

type Props = {}

const CarouselSection = (props: Props) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full mt-4"
    >
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 h-full">
              <a href={item.link} target="_blank">
                <Card className="hover:scale-[1.01] transition-all duration-300 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:h-full flex flex-col justify-between">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarFallback className="bg-gray-100 text-gray-600">
                          {item.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                    </div>
                    <QuoteIcon className="h-6 w-6 text-gray-400 mb-2" />
                    <p className="text-gray-600 italic text-md md:text-sm lg:text-md">
                      {item.review}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:bg-primary hover:text-white hidden sm:flex" />
      <CarouselNext className="hover:bg-primary hover:text-white hidden sm:flex" />
    </Carousel>
  )
}

export default CarouselSection
