import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";
import TechList from "./TechList";
import type {Technology} from "../types";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");
        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        toast.error("Failed to load technologies!");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning("Already added!");
      return;
    }
    setStack((previousStack) => [...previousStack, tech]);

    toast.success("Technology added!");
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed!");
  };

  return (
    <>
      <ToastContainer />

      <section className="container mx-auto px-4 my-16"></section>
      <section className="container mx-auto px-4 my-16">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Technologies */}
          <div className="col-span-12 lg:col-span-9">
            {loading ? (
              <p className="text-gray-500">Loading technologies...</p>
            ) : (
              <TechList
                technologies={technologies}
                stack={stack}
                handleAddToStack={handleAddToStack}
              />
            )}
          </div>

          {/* Your Stack */}
          <div className="col-span-12 lg:col-span-3">
            <Sidebar
              stack={stack}
              handleRemoveFromStack={handleRemoveFromStack}
              handleRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
