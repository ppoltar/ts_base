.PHONY: build test clean install allure

build:
	docker build -t login-test .

test:
	docker run --rm \
		-v $(PWD)/playwright-report:/app/playwright-report \
		-v $(PWD)/test-results:/app/test-results \
		-e IS_DOCKER=true \
		login-test

clean:
	rm -rf playwright-report
	rm -rf test-results

install: build test
