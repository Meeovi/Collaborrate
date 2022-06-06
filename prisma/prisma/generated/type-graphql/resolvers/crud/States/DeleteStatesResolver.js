"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteStatesArgs_1 = require("./args/DeleteStatesArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let DeleteStatesResolver = class DeleteStatesResolver {
    async deleteStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).states.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteStatesArgs_1.DeleteStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteStatesResolver.prototype, "deleteStates", null);
DeleteStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], DeleteStatesResolver);
exports.DeleteStatesResolver = DeleteStatesResolver;
