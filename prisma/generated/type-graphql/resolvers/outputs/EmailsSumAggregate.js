"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailsSumAggregate = class EmailsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsSumAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsSumAggregate.prototype, "staff_id", void 0);
EmailsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailsSumAggregate", {
        isAbstract: true
    })
], EmailsSumAggregate);
exports.EmailsSumAggregate = EmailsSumAggregate;
