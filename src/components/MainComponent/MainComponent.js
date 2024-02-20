import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  header,
  headingFontFamily,
  openTickets,
  criticalFunctionality,
  yesBox,
  noBox,
  assignMentBox,
  affectUserExperience,
  priority,
}) => {
  return (
    <div
      className="min-h-screen py-5 flex flex-col items-center justify-center gap-12 w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.header}>
        <h5
          className={classes.subHeading}
          style={{ "--color": header.subHeadingColor }}
        >
          {header.subHeading}
        </h5>
        <h2
          className={classes.heading}
          style={{
            "--color": header.headingColor,
            "--fontFamily": headingFontFamily,
          }}
        >
          {header.heading}
        </h2>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.ticketsWrapper}>
          <div
            className={classes.titleContainer}
            style={{ "--border": openTickets.titleBorder }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": openTickets.titleColor,
              }}
            >
              {openTickets.title}
            </h3>
          </div>
          <div
            className={classes.ticketsContainer}
            style={{ "--bg": openTickets.ticketsContainer.background }}
          >
            {openTickets?.ticketsContainer?.tickets?.map((ticket, i) => (
              <div
                className={classes.box}
                style={{
                  "--bg": ticket.bg,

                  "--border": ticket.border,
                }}
                key={i}
              >
                <p
                  className={classes.ticket}
                  style={{ "--color": ticket.color }}
                >
                  {ticket.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.ticketsWrapper}>
          <div
            className={classes.titleContainer}
            style={{ "--border": criticalFunctionality.titleBorder }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": criticalFunctionality.titleColor,
              }}
            >
              {criticalFunctionality.title}
            </h3>
          </div>
          <div className={classes.boxWrapper}>
            <div
              className={[classes.yesBox].join(" ")}
              style={{
                "--bg": yesBox.bg,
              }}
            >
              <p className={classes.label} style={{ "--color": yesBox.color }}>
                {yesBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.criticalFunctionality === true)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={[classes.noBox].join(" ")}
              style={{
                "--bg": noBox.bg,
              }}
            >
              <p className={classes.label} style={{ "--color": noBox.color }}>
                {noBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.criticalFunctionality === false)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={[classes.assignMentBox].join(" ")}
              style={{
                "--bg": assignMentBox.bg,
              }}
            >
              <p
                className={classes.label}
                style={{ "--color": assignMentBox.color }}
              >
                {assignMentBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.assigntMent === true)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ticketsWrapper}>
          <div
            className={classes.titleContainer}
            style={{ "--border": affectUserExperience.titleBorder }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": affectUserExperience.titleColor,
              }}
            >
              {affectUserExperience.title}
            </h3>
          </div>
          <div
            className={[
              classes.boxWrapper,
              classes.affectUserExperienceBoxWrapper,
            ].join(" ")}
          >
            <div
              className={[classes.yesBox].join(" ")}
              style={{
                "--bg": yesBox.bg,
              }}
            >
              <p className={classes.label} style={{ "--color": yesBox.color }}>
                {yesBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.affectUserExperience === true)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={[classes.noBox].join(" ")}
              style={{
                "--bg": noBox.bg,
              }}
            >
              <p className={classes.label} style={{ "--color": noBox.color }}>
                {noBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.affectUserExperience === false)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ticketsWrapper}>
          <div
            className={classes.titleContainer}
            style={{ "--border": priority.titleBorder }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": priority.titleColor,
              }}
            >
              {priority.title}
            </h3>
          </div>
          <div className={classes.boxWrapper}>
            {priority.allPriority.map((priority, id) => (
              <div key={id} className={classes.priorityBoxWrapper}>
                <div
                  className={[classes.priorityBox].join(" ")}
                  style={{
                    "--bg": priority.bg,
                  }}
                >
                  <div className={classes.tickets}>
                    {openTickets?.ticketsContainer?.tickets
                      ?.filter((ticket) => priority.label === ticket.priority)
                      ?.map((ticket, i) => (
                        <div
                          className={classes.box}
                          style={{
                            "--bg": ticket.bg,
                            "--border": ticket.border,
                          }}
                          key={i}
                        >
                          <p
                            className={classes.ticket}
                            style={{ "--color": ticket.color }}
                          >
                            {ticket.label}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>{" "}
                <p
                  className={classes.label}
                  style={{ "--color": priority.color }}
                >
                  {priority.label}
                </p>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
