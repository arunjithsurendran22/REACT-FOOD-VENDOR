import { useState } from "react";
import api from "../components/authorization/api";
import { toast } from "react-toastify";
const WorkingHours = () => {
  const [day, setDay] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [openingState, setOpeningState] = useState("");
  const [closingHours, setClosingHours] = useState("");
  const [closingState, setClosingState] = useState("");
  const [isClosed, setIsClosed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/settings/working-hours/create", {
        day,
        openingHours: isClosed ? "" : openingHours,
        openingState: isClosed ? "" : openingState,
        closingHours: isClosed ? "" : closingHours,
        closingState: isClosed ? "" : closingState,
      });
      toast.success("successfully added working time ");
    } catch (error) {
      toast.error("failed to add working time");
      console.log(error, "failed to add working time");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Day</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
        </label>
        <label>
          <select
            value={openingHours}
            onChange={(e) => setOpeningHours(e.target.value)}
          >
            <option value="">OpeningHours</option>
            <option value="1">1</option>
            <option value="1.30">1.30</option>
            <option value="2">2</option>
            <option value="2.30">2.30</option>
            <option value="3">3</option>
            <option value="3.30">3.30</option>
            <option value="4">4</option>
            <option value="4.30">4.30</option>
            <option value="5">5</option>
            <option value="5.30">5.30</option>
            <option value="6">6</option>
            <option value="6.30">6.30</option>
            <option value="7">7</option>
            <option value="7.30">7.30</option>
            <option value="8">8</option>
            <option value="8.30">8.30</option>
            <option value="9">9</option>
            <option value="9.30">9.30</option>
            <option value="10">10</option>
            <option value="10.30">10.30</option>
            <option value="11">11</option>
            <option value="11.30">11.30</option>
            <option value="12">12</option>
            <option value="12.30">12.30</option>
          </select>
        </label>
        <label>
          <select
            value={openingState}
            onChange={(e) => setOpeningState(e.target.value)}
          >
            <option value="">AM/PM</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </label>
        <label>
          <select
            value={closingHours}
            onChange={(e) => setClosingHours(e.target.value)}
          >
            <option value="">ClosingHours</option>
            <option value="1">1</option>
            <option value="1.30">1.30</option>
            <option value="2">2</option>
            <option value="2.30">2.30</option>
            <option value="3">3</option>
            <option value="3.30">3.30</option>
            <option value="4">4</option>
            <option value="4.30">4.30</option>
            <option value="5">5</option>
            <option value="5.30">5.30</option>
            <option value="6">6</option>
            <option value="6.30">6.30</option>
            <option value="7">7</option>
            <option value="7.30">7.30</option>
            <option value="8">8</option>
            <option value="8.30">8.30</option>
            <option value="9">9</option>
            <option value="9.30">9.30</option>
            <option value="10">10</option>
            <option value="10.30">10.30</option>
            <option value="11">11</option>
            <option value="11.30">11.30</option>
            <option value="12">12</option>
            <option value="12.30">12.30</option>
          </select>
        </label>
        <label>
          <select
            value={closingState}
            onChange={(e) => setClosingState(e.target.value)}
          >
            <option value="">AM/PM</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </label>
        <input
          type="checkbox"
          checked={isClosed}
          onChange={() => setIsClosed(!isClosed)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default WorkingHours;
