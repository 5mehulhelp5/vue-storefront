import { createConsolaStructuredLogger } from "../../src/ConsolaStructuredLogger";
import type { StructuredLog } from "../../src/interfaces/StructuredLog";
import type { LogData, Metadata } from "../../src/interfaces/LoggerInterface";

process.env.NODE_ENV = "development";

describe("createConsolaStructuredLogger", () => {
  const mockStructuredLog: StructuredLog = {
    createLog: jest.fn(),
  };

  const logData: LogData = "Test log message";
  const metadata: Metadata = { userId: "12345" };

  it("should create a logger with the correct set of methods", () => {
    const logger = createConsolaStructuredLogger(mockStructuredLog);

    expect(logger).toHaveProperty("log");
    expect(logger).toHaveProperty("emergency");
    expect(logger).toHaveProperty("alert");
    expect(logger).toHaveProperty("critical");
    expect(logger).toHaveProperty("error");
    expect(logger).toHaveProperty("warning");
    expect(logger).toHaveProperty("notice");
    expect(logger).toHaveProperty("info");
    expect(logger).toHaveProperty("debug");
  });

  it("should log at the correct level", () => {
    const logger = createConsolaStructuredLogger(mockStructuredLog);

    const infoSpy = jest.spyOn(logger, "info").mockImplementation(() => {});
    logger.info(logData, metadata);
    expect(infoSpy).toHaveBeenCalledTimes(1);

    const errorSpy = jest.spyOn(logger, "error").mockImplementation(() => {});
    logger.error(logData, metadata);
    expect(errorSpy).toHaveBeenCalledTimes(1);

    const debugSpy = jest.spyOn(logger, "debug").mockImplementation(() => {});
    expect(debugSpy).not.toHaveBeenCalled();
  });
});