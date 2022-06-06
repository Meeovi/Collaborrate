"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateStatesArgs_1 = require("./args/UpdateStatesArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let UpdateStatesResolver = class UpdateStatesResolver {
    async updateStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).states.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateStatesArgs_1.UpdateStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateStatesResolver.prototype, "updateStates", null);
UpdateStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], UpdateStatesResolver);
exports.UpdateStatesResolver = UpdateStatesResolver;
