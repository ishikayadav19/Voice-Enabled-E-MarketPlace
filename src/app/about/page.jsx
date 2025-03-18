import React from 'react'

const about= () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="md:pt-8">
        <p className="text-center font-bold text-indigo-500 md:text-left">
          Who we are
        </p>
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
          Our competitive advantage
        </h1>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text.
          <br />
          <br />
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is{" "}
          <a
            href="#"
            className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            random
          </a>{" "}
          or otherwise generated. It may be used to display a sample of fonts or
          generate text for testing. Filler text is dummy text which has no
          meaning however looks very similar to real text.
        </p>
        <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
          About us
        </h2>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated. It may be used to display a
          sample of fonts or generate text for testing. Filler text is dummy
          text which has no meaning however looks very similar to real text.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Blog
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated.
      </p>
    </div>
    {/* text - end */}
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      {/* article - start */}
      <a
        href="#"
        className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
      >
        <img
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
        <div className="relative mt-auto p-4">
          <span className="block text-sm text-gray-200">July 19, 2021</span>
          <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
            New trends in Tech
          </h2>
          <span className="font-semibold text-indigo-300">Read more</span>
        </div>
      </a>
      {/* article - end */}
      {/* article - start */}
      <a
        href="#"
        className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
      >
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="Photo by Lorenzo Herrera"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
        <div className="relative mt-auto p-4">
          <span className="block text-sm text-gray-200">April 07, 2021</span>
          <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
            Working with legacy stacks
          </h2>
          <span className="font-semibold text-indigo-300">Read more</span>
        </div>
      </a>
      {/* article - end */}
      {/* article - start */}
      <a
        href="#"
        className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
      >
        <img
          src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
        <div className="relative mt-auto p-4">
          <span className="block text-sm text-gray-200">March 15, 2021</span>
          <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
            10 best smartphones for devs
          </h2>
          <span className="font-semibold text-indigo-300">Read more</span>
        </div>
      </a>
      {/* article - end */}
      {/* article - start */}
      <a
        href="#"
        className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
      >
        <img
          src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="Photo by Martin Sanchez"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
        <div className="relative mt-auto p-4">
          <span className="block text-sm text-gray-200">January 27, 2021</span>
          <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
            8 High performance Notebooks
          </h2>
          <span className="font-semibold text-indigo-300">Read more</span>
        </div>
      </a>
      {/* article - end */}
    </div>
  </div>
</div>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Frequently asked questions
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated.
      </p>
    </div>
    {/* text - end */}
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
      {/* question - start */}
      <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
          How does the product work?
        </h3>
        <p className="text-gray-500">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
          What are the features?
        </h3>
        <p className="text-gray-500">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
          What about integrations?
        </h3>
        <p className="text-gray-500">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
          Is support available?
        </h3>
        <p className="text-gray-500">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
          How does one upgrage a plan?
        </h3>
        <p className="text-gray-500">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
          Which payment methods are available?
        </h3>
        <p className="text-gray-500">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text.
        </p>
      </div>
      {/* question - end */}
    </div>
  </div>
</div>


    </div>
  )
}

export default about