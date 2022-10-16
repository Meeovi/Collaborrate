"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryAvgAggregate_1 = require("../outputs/GlossaryAvgAggregate");
const GlossaryCountAggregate_1 = require("../outputs/GlossaryCountAggregate");
const GlossaryMaxAggregate_1 = require("../outputs/GlossaryMaxAggregate");
const GlossaryMinAggregate_1 = require("../outputs/GlossaryMinAggregate");
const GlossarySumAggregate_1 = require("../outputs/GlossarySumAggregate");
let GlossaryGroupBy = class GlossaryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], GlossaryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], GlossaryGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryCountAggregate_1.GlossaryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryCountAggregate_1.GlossaryCountAggregate)
], GlossaryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryAvgAggregate_1.GlossaryAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryAvgAggregate_1.GlossaryAvgAggregate)
], GlossaryGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossarySumAggregate_1.GlossarySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossarySumAggregate_1.GlossarySumAggregate)
], GlossaryGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryMinAggregate_1.GlossaryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryMinAggregate_1.GlossaryMinAggregate)
], GlossaryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryMaxAggregate_1.GlossaryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryMaxAggregate_1.GlossaryMaxAggregate)
], GlossaryGroupBy.prototype, "_max", void 0);
GlossaryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlossaryGroupBy", {
        isAbstract: true
    })
], GlossaryGroupBy);
exports.GlossaryGroupBy = GlossaryGroupBy;
