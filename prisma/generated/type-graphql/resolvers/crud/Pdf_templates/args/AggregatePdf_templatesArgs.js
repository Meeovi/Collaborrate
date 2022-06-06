"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePdf_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesOrderByWithRelationInput_1 = require("../../../inputs/Pdf_templatesOrderByWithRelationInput");
const Pdf_templatesWhereInput_1 = require("../../../inputs/Pdf_templatesWhereInput");
const Pdf_templatesWhereUniqueInput_1 = require("../../../inputs/Pdf_templatesWhereUniqueInput");
let AggregatePdf_templatesArgs = class AggregatePdf_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereInput_1.Pdf_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereInput_1.Pdf_templatesWhereInput)
], AggregatePdf_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Pdf_templatesOrderByWithRelationInput_1.Pdf_templatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePdf_templatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesWhereUniqueInput_1.Pdf_templatesWhereUniqueInput)
], AggregatePdf_templatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePdf_templatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePdf_templatesArgs.prototype, "skip", void 0);
AggregatePdf_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePdf_templatesArgs);
exports.AggregatePdf_templatesArgs = AggregatePdf_templatesArgs;
