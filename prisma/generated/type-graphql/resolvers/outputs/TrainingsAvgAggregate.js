"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TrainingsAvgAggregate = class TrainingsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TrainingsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TrainingsAvgAggregate.prototype, "comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TrainingsAvgAggregate.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TrainingsAvgAggregate.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TrainingsAvgAggregate.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TrainingsAvgAggregate.prototype, "checklists", void 0);
TrainingsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TrainingsAvgAggregate", {
        isAbstract: true
    })
], TrainingsAvgAggregate);
exports.TrainingsAvgAggregate = TrainingsAvgAggregate;
