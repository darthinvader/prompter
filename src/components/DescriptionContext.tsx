import * as React from "react";

// Define the shape of the context data
type DescriptionData = string[];

// Create the context
const DescriptionsContext = React.createContext<DescriptionData | undefined>([
  "",
]);

const DescriptionsUpdateContext = React.createContext<
  (description: string) => void
>((description: string) => {});

export const useDescriptions = () => React.useContext(DescriptionsContext);
export const useDescriptionsUpdate = () =>
  React.useContext(DescriptionsUpdateContext);

// Create a provider for the context
const DescriptionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [descriptions, setDescriptions] = React.useState<string[]>([]);
  const addDescription = (description: string) =>
    setDescriptions((descriptions) => [...descriptions, description]);

  return (
    <DescriptionsUpdateContext.Provider value={addDescription}>
      <DescriptionsContext.Provider value={descriptions}>
        {children}
      </DescriptionsContext.Provider>
    </DescriptionsUpdateContext.Provider>
  );
};

export default DescriptionsProvider;
