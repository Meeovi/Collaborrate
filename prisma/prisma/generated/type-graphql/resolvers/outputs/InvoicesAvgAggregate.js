"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InvoicesAvgAggregate = class InvoicesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InvoicesAvgAggregate.prototype, "invoice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InvoicesAvgAggregate.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InvoicesAvgAggregate.prototype, "id", void 0);
InvoicesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InvoicesAvgAggregate", {
        isAbstract: true
    })
], InvoicesAvgAggregate);
exports.InvoicesAvgAggregate = InvoicesAvgAggregate;
