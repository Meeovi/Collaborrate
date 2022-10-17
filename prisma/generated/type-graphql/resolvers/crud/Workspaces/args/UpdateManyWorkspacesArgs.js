"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesUpdateManyMutationInput_1 = require("../../../inputs/WorkspacesUpdateManyMutationInput");
const WorkspacesWhereInput_1 = require("../../../inputs/WorkspacesWhereInput");
let UpdateManyWorkspacesArgs = class UpdateManyWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesUpdateManyMutationInput_1.WorkspacesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesUpdateManyMutationInput_1.WorkspacesUpdateManyMutationInput)
], UpdateManyWorkspacesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereInput_1.WorkspacesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereInput_1.WorkspacesWhereInput)
], UpdateManyWorkspacesArgs.prototype, "where", void 0);
UpdateManyWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWorkspacesArgs);
exports.UpdateManyWorkspacesArgs = UpdateManyWorkspacesArgs;
