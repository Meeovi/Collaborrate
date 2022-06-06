"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AgreementsSumAggregate = class AgreementsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgreementsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgreementsSumAggregate.prototype, "reference_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgreementsSumAggregate.prototype, "user_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgreementsSumAggregate.prototype, "shop_id", void 0);
AgreementsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgreementsSumAggregate", {
        isAbstract: true
    })
], AgreementsSumAggregate);
exports.AgreementsSumAggregate = AgreementsSumAggregate;
