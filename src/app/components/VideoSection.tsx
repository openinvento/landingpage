interface VideoSectionProps { src: string }

export default function VideoSection({ src }: VideoSectionProps) {
  return (
    <section className="py-16 text-center">
      <video controls className="mx-auto max-w-lg">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
