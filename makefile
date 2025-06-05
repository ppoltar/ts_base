.PHONY: build test clean install allure

build:
	docker build -t login-test .

test:
	docker run --rm \
		-v $(PWD)/playwright-reports:/app/playwright-reports \
		-v $(PWD)/test-results:/app/test-results \
		-e IS_DOCKER=true \
		login-test

clean:
	rm -rf playwright-report
	rm -rf test-results

install: build test
