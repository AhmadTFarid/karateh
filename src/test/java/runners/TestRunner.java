package runners;

import com.intuit.karate.junit5.Karate;

public class TestRunner {
    @Karate.Test
    Karate runSmoke() {
        return Karate.run("classpath:tests")
                .outputCucumberJson(true)
                .karateEnv("qa")
                .tags("@Regression");
    }

        }
