import React from "react"

const Sidebar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col gap-y-2 bg-white rounded-xl p-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex inline-flex items-center gap-x-2 rounded-md p-3 text-left font-semibold w-full ${
            activeTab === tab.id
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.id === 1 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          
          )}
          {tab.id === 2 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
          
          )}
          {tab.id === 3 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>          
          
          )}
          {tab.id === 4 && (
            <svg className="size-5" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 12H17M18 7H18.009M6.8 18C6.8 18 7.6 19.875 6 21M17.2 18C17.2 18 16.4 19.875 18 21M12 18V21M16 3C18.339 3 19.508 3 20.362 3.536C20.8075 3.81584 21.1842 4.19251 21.464 4.638C22 5.492 22 6.66 22 9C22 11.34 22 12.508 21.463 13.362C21.1836 13.8069 20.8077 14.1832 20.363 14.463C19.507 15 18.338 15 16 15H8C5.661 15 4.492 15 3.638 14.463C3.19273 14.1837 2.81608 13.8078 2.536 13.363C2 12.507 2 11.338 2 9C2 6.662 2 5.492 2.536 4.638C2.81584 4.19251 3.19251 3.81584 3.638 3.536C4.492 3 5.66 3 8 3H16Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
          
          )}
          {tab.id === 5 && (
            <svg className="size-5" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.21 13.8899L7 22.9999L12 19.9999L17 22.9999L15.79 13.8799" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
          
          )}
          {tab.id === 6 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>
          
          )}
          {tab.id === 7 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>          
          
          )}
          {tab.title}
        </button>
      ))}
    </div>
  )
}

export default Sidebar
