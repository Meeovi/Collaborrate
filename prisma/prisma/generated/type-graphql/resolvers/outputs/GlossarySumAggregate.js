"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossarySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let GlossarySumAggregate = class GlossarySumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GlossarySumAggregate.prototype, "id", void 0);
GlossarySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlossarySumAggregate", {
        isAbstract: true
    })
], GlossarySumAggregate);
exports.GlossarySumAggregate = GlossarySumAggregate;
