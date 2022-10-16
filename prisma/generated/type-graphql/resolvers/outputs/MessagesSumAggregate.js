"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MessagesSumAggregate = class MessagesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesSumAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MessagesSumAggregate.prototype, "staff_id", void 0);
MessagesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MessagesSumAggregate", {
        isAbstract: true
    })
], MessagesSumAggregate);
exports.MessagesSumAggregate = MessagesSumAggregate;
