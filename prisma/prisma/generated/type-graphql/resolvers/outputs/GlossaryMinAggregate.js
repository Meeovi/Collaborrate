"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let GlossaryMinAggregate = class GlossaryMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GlossaryMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinAggregate.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], GlossaryMinAggregate.prototype, "published", void 0);
GlossaryMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlossaryMinAggregate", {
        isAbstract: true
    })
], GlossaryMinAggregate);
exports.GlossaryMinAggregate = GlossaryMinAggregate;
