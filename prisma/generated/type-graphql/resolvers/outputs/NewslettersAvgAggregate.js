"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NewslettersAvgAggregate = class NewslettersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NewslettersAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NewslettersAvgAggregate.prototype, "cust_id", void 0);
NewslettersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("NewslettersAvgAggregate", {
        isAbstract: true
    })
], NewslettersAvgAggregate);
exports.NewslettersAvgAggregate = NewslettersAvgAggregate;
