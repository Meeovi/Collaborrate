"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ImportmAvgAggregate = class ImportmAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ImportmAvgAggregate.prototype, "id", void 0);
ImportmAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ImportmAvgAggregate", {
        isAbstract: true
    })
], ImportmAvgAggregate);
exports.ImportmAvgAggregate = ImportmAvgAggregate;
