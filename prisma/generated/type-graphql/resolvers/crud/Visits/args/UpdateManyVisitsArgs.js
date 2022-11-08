"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsUpdateManyMutationInput_1 = require("../../../inputs/VisitsUpdateManyMutationInput");
const VisitsWhereInput_1 = require("../../../inputs/VisitsWhereInput");
let UpdateManyVisitsArgs = class UpdateManyVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsUpdateManyMutationInput_1.VisitsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsUpdateManyMutationInput_1.VisitsUpdateManyMutationInput)
], UpdateManyVisitsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereInput_1.VisitsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsWhereInput_1.VisitsWhereInput)
], UpdateManyVisitsArgs.prototype, "where", void 0);
UpdateManyVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVisitsArgs);
exports.UpdateManyVisitsArgs = UpdateManyVisitsArgs;
