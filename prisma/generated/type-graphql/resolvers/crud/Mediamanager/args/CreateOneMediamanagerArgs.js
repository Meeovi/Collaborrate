"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerCreateInput_1 = require("../../../inputs/MediamanagerCreateInput");
let CreateOneMediamanagerArgs = class CreateOneMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerCreateInput_1.MediamanagerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerCreateInput_1.MediamanagerCreateInput)
], CreateOneMediamanagerArgs.prototype, "data", void 0);
CreateOneMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneMediamanagerArgs);
exports.CreateOneMediamanagerArgs = CreateOneMediamanagerArgs;
