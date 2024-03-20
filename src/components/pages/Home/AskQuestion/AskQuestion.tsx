import { useState } from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { FaCircleCheck, FaHandHoldingHeart } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const AskQuestion = () => {
  const data = [
    {
      question: 'What is the primary objective or goal of the Event 360?',
      answer:
        'The overarching goal of Event 360 is to facilitate meaningful industry collaboration, fostering innovation and knowledge exchange among participants, ultimately advancing the collective understanding of ',
    },
    {
      question: 'Can you provide details events date, time, and location?',
      answer:
        ' Event 360 is scheduled to take place on every day. 9am to 11pm, hosted at USA, providing a central and accessible setting for attendees.',
    },

    {
      question: 'What is the target audience for Event 360?',
      answer:
        ' Event 360 caters to a diverse audience, including professionals, enthusiasts, and experts in [industry/field], creating an inclusive environment for collaborative learning.',
    },
    {
      question: 'Are there any specific  topics  covered during the event?',
      answer:
        ' The event will cover a range of compelling themes such as [list key themes], offering in-depth discussions and insights into the latest trends and challenges in the',
    },
    {
      question: 'How can participants register for Event 360?',
      answer:
        ' Participants can easily register for Event 360 through [registration platform], ensuring a streamlined and user-friendly experience for all interested attendees.',
    },
    {
      question: ' What are the key features or highlights of the event?',
      answer:
        'Key features of Event 360 include engaging panel discussions, interactive workshops, and networking opportunities, providing attendees with a well-rounded and enriching experience.',
    },
    {
      question: ' Will there be guest speakers  and if so, who are they?',
      answer:
        ' Event 360 boasts renowned speakers such as [list names], who bring their expertise to the forefront, sharing valuable perspectives on',
    },
    {
      question: ' Are there sponsorship opportunities available ?',
      answer:
        ' Businesses and organizations have the opportunity to become sponsors of Event 360, gaining visibility and recognition while contributing to the success of this impactful industry gathering.',
    },
    {
      question: 'How will evnt ensure a safe  environment for participants?',
      answer:
        'Event 360 is committed to ensuring a safe and inclusive environment through stringent safety protocols, diverse speaker representation, and accessibility features to accommodate all participants.',
    },
    {
      question: 'What post-event activities  available for attendees?',
      answer:
        'After the event, attendees will have access to a curated selection of post-event resources, including session recordings, presentation materials, and exclusive content, extending the learning experience beyond the live event.',
    },
  ]

  // State to manage the open/close state of each question
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false))

  // Function to toggle the open/close state of a question
  const handleToggle = (index: number) => {
    const updatedState = isOpen.map((state, i) =>
      i === index ? !state : false
    )
    setIsOpen(updatedState)
  }
  return (
    <>
      <div className="md:mt-[178px] mt-[100px] container">
        <div className="text-center ">
          <h2>FREQALY ASK QUESTION</h2>

          <p className="mt-3 text-[#566B84] font-normal md;text-[18px]">
            Our Customer Some Frequently Ask Question.
          </p>
        </div>

        {/* Displaying event details and a question box */}

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:pt-16">
          <div className="">
            <div className="md:flex">
              {/* event */}
              <div className="relative z-10 md:top-[340px] top-[400px] md:right-20   bg-white shadow-xl rounded-lg px-2 py-4 md:w-96 w-64">
                <div className="flex space-x-3 ">
                  <div>
                    <img
                      //   src={man2}
                      className="h-14 w-14 rounded-full "
                      alt=""
                    />
                    <FaCircleCheck className="text-[#0B63E5] relative bottom-4" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">Wiliam Jon</h1>
                    <p>Art Critic</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center relative md:top-8 right-11 w-full">
                <div className="bg-white md:ml-8  z-10 px-4 py-3 shadow-xl rounded-lg ">
                  <div className="flex items-center space-x-4 justify-between ">
                    <div>
                      <FaRegQuestionCircle
                        size={25}
                        className="text-[#ff4d6d]"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">Get Your Answer</h1>
                      <p>Frequently Asked Questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  className="rounded-lg md:h-96 h-72 inline-block w-full"
                  //   src={eventPic1}
                  alt=""
                />
              </div>
              <div className="relative bottom-6 ">
                <img
                  className="rounded-lg md:h-96 h-72 inline-block w-full"
                  //   src={eventPic22}
                  alt=""
                />
                <div className="bg-white md:block hidden p-4 shadow-lg relative bottom-12 right-12 w-24 rounded-lg">
                  <FaHandHoldingHeart size={50} className="text-[#0B63E5]" />
                </div>
              </div>
            </div>
          </div>
          {/* question  */}
          <div>
            <div className="pt-10">
              <div className="md:p-4  h-[440px] overflow-y-scroll ">
                {/* Mapping through FAQ data */}
                {data.map((item, index) => (
                  <div
                    className="space-y-2 mb-3  rounded-lg border-b"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`toggle-${index}`}
                      className="hidden"
                      checked={isOpen[index]}
                      onChange={() => handleToggle(index)}
                    />
                    <label
                      htmlFor={`toggle-${index}`}
                      className="cursor-pointer text-lg"
                    >
                      {/* Styling for question */}
                      <div
                        className={`flex justify-between ${
                          isOpen[index]
                            ? 'bg-[#0B63E5] p-2 text-[#ffffff] duration-300'
                            : ' hover:bg-[#000] p-2 hover:text-[#ffffff] duration-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {/* Icons for question */}
                          <div>
                            {isOpen[index] ? (
                              <FaRegQuestionCircle />
                            ) : (
                              <FaRegQuestionCircle className="text-[#ff4d6d]" />
                            )}
                          </div>
                          <div className="">{item.question}</div>
                        </div>
                        {isOpen[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </label>
                    {/* Displaying answer if question is open */}
                    {isOpen[index] && (
                      <div className="mt-2 p-2 duration-300">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AskQuestion
