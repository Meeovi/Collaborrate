"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ManufacturerAvgAggregate = class ManufacturerAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ManufacturerAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ManufacturerAvgAggregate.prototype, "product", void 0);
ManufacturerAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ManufacturerAvgAggregate", {
        isAbstract: true
    })
], ManufacturerAvgAggregate);
exports.ManufacturerAvgAggregate = ManufacturerAvgAggregate;
