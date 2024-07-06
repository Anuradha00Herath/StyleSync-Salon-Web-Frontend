import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar(){
    const navigate = useNavigate();
    return(
        <div
              style={{
                paddingTop: 20,
              }}
            >
              <form>
                <input
                  style={{
                    height: 40,
                    width: 300,
                  }}
                  type="text"
                  placeholder="Search salon name or location"
                />
                {/* <select
                  style={{
                    height: 40,
                    width: 180,
                  }}
                  id="categories"
                  name="categories"
                  defaultValue="select service"
                  onChange={handleServiceChange}
                >
                  {service.map((service, index) => (
                    <option key={index} value={service.serviceType}>
                      {service.serviceType}
                    </option>
                  ))}
                </select> */}

                <input
                  style={{
                    height: 40,
                    width: 180,
                    backgroundColor: "black",
                    color: "white",
                  }}
                  type="submit"
                  value="Search"
                  onClick={()=>navigate('/search-result')}
                />
              </form>
            </div>
    )
}