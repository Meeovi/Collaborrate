"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailsAvgAggregate = class EmailsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsAvgAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsAvgAggregate.prototype, "staff_id", void 0);
EmailsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailsAvgAggregate", {
        isAbstract: true
    })
], EmailsAvgAggregate);
exports.EmailsAvgAggregate = EmailsAvgAggregate;
