"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsUpdateInput_1 = require("../../../inputs/VisitsUpdateInput");
const VisitsWhereUniqueInput_1 = require("../../../inputs/VisitsWhereUniqueInput");
let UpdateOneVisitsArgs = class UpdateOneVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsUpdateInput_1.VisitsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsUpdateInput_1.VisitsUpdateInput)
], UpdateOneVisitsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereUniqueInput_1.VisitsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsWhereUniqueInput_1.VisitsWhereUniqueInput)
], UpdateOneVisitsArgs.prototype, "where", void 0);
UpdateOneVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneVisitsArgs);
exports.UpdateOneVisitsArgs = UpdateOneVisitsArgs;
