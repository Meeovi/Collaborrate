"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NewslettersSumAggregate = class NewslettersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NewslettersSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NewslettersSumAggregate.prototype, "cust_id", void 0);
NewslettersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NewslettersSumAggregate", {
        isAbstract: true
    })
], NewslettersSumAggregate);
exports.NewslettersSumAggregate = NewslettersSumAggregate;
