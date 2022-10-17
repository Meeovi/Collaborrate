"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MessagesAvgAggregate = class MessagesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesAvgAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesAvgAggregate.prototype, "staff_id", void 0);
MessagesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MessagesAvgAggregate", {
        isAbstract: true
    })
], MessagesAvgAggregate);
exports.MessagesAvgAggregate = MessagesAvgAggregate;
