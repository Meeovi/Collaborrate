"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Pdf_templatesAvgAggregate = class Pdf_templatesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Pdf_templatesAvgAggregate.prototype, "id", void 0);
Pdf_templatesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Pdf_templatesAvgAggregate", {
        isAbstract: true
    })
], Pdf_templatesAvgAggregate);
exports.Pdf_templatesAvgAggregate = Pdf_templatesAvgAggregate;
