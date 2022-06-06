"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsCreateInput_1 = require("../../../inputs/SegmentsCreateInput");
const SegmentsUpdateInput_1 = require("../../../inputs/SegmentsUpdateInput");
const SegmentsWhereUniqueInput_1 = require("../../../inputs/SegmentsWhereUniqueInput");
let UpsertSegmentsArgs = class UpsertSegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput)
], UpsertSegmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsCreateInput_1.SegmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsCreateInput_1.SegmentsCreateInput)
], UpsertSegmentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsUpdateInput_1.SegmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsUpdateInput_1.SegmentsUpdateInput)
], UpsertSegmentsArgs.prototype, "update", void 0);
UpsertSegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSegmentsArgs);
exports.UpsertSegmentsArgs = UpsertSegmentsArgs;
