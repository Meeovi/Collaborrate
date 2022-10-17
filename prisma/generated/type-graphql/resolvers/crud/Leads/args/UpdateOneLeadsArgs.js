"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsUpdateInput_1 = require("../../../inputs/LeadsUpdateInput");
const LeadsWhereUniqueInput_1 = require("../../../inputs/LeadsWhereUniqueInput");
let UpdateOneLeadsArgs = class UpdateOneLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsUpdateInput_1.LeadsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsUpdateInput_1.LeadsUpdateInput)
], UpdateOneLeadsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereUniqueInput_1.LeadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsWhereUniqueInput_1.LeadsWhereUniqueInput)
], UpdateOneLeadsArgs.prototype, "where", void 0);
UpdateOneLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneLeadsArgs);
exports.UpdateOneLeadsArgs = UpdateOneLeadsArgs;
