"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InternalizationAvgAggregate = class InternalizationAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InternalizationAvgAggregate.prototype, "id", void 0);
InternalizationAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InternalizationAvgAggregate", {
        isAbstract: true
    })
], InternalizationAvgAggregate);
exports.InternalizationAvgAggregate = InternalizationAvgAggregate;
