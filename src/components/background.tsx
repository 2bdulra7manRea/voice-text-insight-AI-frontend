import { FormText } from "./form";
import { HeaderKL } from "./header";
import { FormVoice } from "./voice-form";

const url =
  "url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

export function Background({children}:{children:any}) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "90vh",
          backgroundImage: url,
        }}
      >
        <HeaderKL/>
        <div
          style={{
            width: "100%",
            height: "100%",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            style={{ width: "100%", height: "100%" }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
